from ninja import Schema, Field


class ArticleIn(Schema):
    title: str = Field(min_length=1)
    description: str
    content: str


class ArticleOut(Schema):
    id: int
    title: str
    description: str
    content: str
