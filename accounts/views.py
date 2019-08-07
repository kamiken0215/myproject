from django.contrib.auth.views import LoginView, LogoutView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import TemplateView
from . import forms
from django.http.response import HttpResponse
from django.shortcuts import render
from django.views.generic import TemplateView, CreateView
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from .models import InsideTab


class loginView(LoginView):
    form_class = forms.LoginForm
    template_name = "accounts/login.html"


class logoutView(LoginRequiredMixin, LogoutView):
    template_name = "accounts/logout.html"


class indexView(TemplateView):
    model = InsideTab
    template_name = "accounts/index.html"

    def index_view(request):

        form_test = request.POST.getlist("prm", "てすと")
        for i in form_test:
            print(i)

        # all = InsideTab.objects.values('url_id', 'note', 'url')
        all = InsideTab.objects.all()

        url_dict = {}
        tab_dict = {}

        for date_dict in all:
            url_dict.update(
                [(str(date_dict.url_id), [date_dict.note, date_dict.url, str(date_dict.tab_id)])]
            )

        for date_dict in all:
            tab_dict.update(
                [(str(date_dict.tab_id), date_dict.tab_name)]
            )

        info_dict = {
            # なんかここリストの頭に振り分け用のタブ番号いれとかなあかんと思うで
            # 'panzer': {'1': ['ガルパンはいいぞ', 'http://girls-und-panzer-finale.jp/'],ここにtab_id仕込む
            #            '2': ['大洗観光サイト', 'http://www.oarai-info.jp/page/page000179.html']},
            'panzer': url_dict,

            # 'tab_list': {'1': 'なんでも',
            #              '2': 'プログラミング',
            #              '3': '趣味',
            #              },
            'tab_list': tab_dict,
        }

        print(info_dict)

        return render(request, 'accounts/index.html', {'info_dict': info_dict})


class createView(CreateView):
    form_class = UserCreationForm
    template_name = "accounts/create.html"
    success_url = reverse_lazy("login")