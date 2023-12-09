from django.db import models
from django.contrib import admin
import requests
from dadfes.admin import DfesAdminModelMixin

USER_PROXY_API_URL = 'http://localhost:5000/user'


class ExternalUser(models.Model):
    id = models.TextField("Id", primary_key=True)
    fullName = models.TextField("fullName")
    email = models.TextField("email")
    createdAt = models.TextField("createdAt")
    modifiedAt = models.TextField("modifiedAt")

    class Meta:
        managed = False
        verbose_name = "User"


class ExternalUserAdmin(DfesAdminModelMixin, admin.ModelAdmin):
    list_display = (
        'id',
        'fullName',
        'email',
        'createdAt',
        'modifiedAt',
    )

    def get_list(self, request, page_num, list_per_page):
        response = requests.get(
            USER_PROXY_API_URL
        )

        if response.status_code != 200:
            return {
                "items": [],
            }
        
        data = response.json()

        items = [ExternalUser(**i) for i in data or []]

        return {
            "items": items,
        }
