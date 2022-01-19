from django.urls import path

from api.views.user_views import get_user_profile, register_user, MyTokenObtainPairView

urlpatterns = [
    path("profile/", get_user_profile, name="get-user-profile"),
    path("register/", register_user, name="register-user"),
    path("login/", MyTokenObtainPairView.as_view(),
         name="token_obtain_pair"),
]
