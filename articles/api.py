from typing import List
from django.shortcuts import get_object_or_404
from .schemas import ArticleIn, ArticleOut
from .models import Article
from ninja import Router

router = Router()


@router.get("/", response=List[ArticleOut])
def index(request):
    qs = Article.objects.all()
    return qs


@router.get("/{article_id}/", response=ArticleOut)
def details(request, article_id: int):
    return get_object_or_404(Article, id=article_id)


@router.post("/")
def create(request, payload: ArticleIn):
    article = Article.objects.create(**payload.dict())
    return {"id": article.id}
