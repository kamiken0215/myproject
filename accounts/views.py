from django.contrib.auth.views import LoginView, LogoutView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import TemplateView
from . import forms
from django.http.response import HttpResponse
from django.shortcuts import render
from django.views.generic import TemplateView, CreateView
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy


class loginView(LoginView):
    form_class = forms.LoginForm
    template_name = "accounts/login.html"


class logoutView(LoginRequiredMixin, LogoutView):
    template_name = "accounts/logout.html"


class indexView(TemplateView):
    template_name = "accounts/index.html"

    def index_view(request):
        info_dict = {
            'panzer': {'1': ['ガルパンはいいぞ', 'http://girls-und-panzer-finale.jp/'],
                       '2': ['大洗観光サイト', 'http://www.oarai-info.jp/page/page000179.html']},
            'tab_list': {'1': 'なんでも',
                         '2': 'プログラミング',
                         '3': '趣味',
                         },
        }
        return render(request, 'accounts/index.html', {'info_dict': info_dict})


class createView(CreateView):
    form_class = UserCreationForm
    template_name = "accounts/create.html"
    success_url = reverse_lazy("login")