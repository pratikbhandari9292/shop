from django.urls import path

from api.views.product_views import get_products, get_product_details

urlpatterns = [
    path("", get_products, name="get-products"),
    path("<int:product_id>/",
         get_product_details, name="get-product-details"),
]
