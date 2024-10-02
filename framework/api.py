from ninja import NinjaAPI

api = NinjaAPI()

api.add_router("/articles/", "articles.api.router")