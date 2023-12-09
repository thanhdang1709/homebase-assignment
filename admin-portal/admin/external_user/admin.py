from django.contrib import admin
from .models import ExternalUser, ExternalUserAdmin

# Register your models here.
admin.site.register(ExternalUser, ExternalUserAdmin)
