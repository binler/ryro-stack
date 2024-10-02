from django.db import models


class Article(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=255, blank=False)
    description = models.TextField(default="")
    content = models.TextField(default="")

    class Meta:
        db_table = "articles"
