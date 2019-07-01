from django.contrib.auth import forms as auth_forms
# from django import forms
# from .models import InsideTab


class LoginForm(auth_forms.AuthenticationForm):
    '''ログインフォーム'''
    def __init__(self, *args, **kw):
        super().__init__(*args, **kw)
        for field in self.fields.values():
            field.widget.attrs['placeholder'] = field.label


# class InsideTabForm(forms.ModelForm):
#
#     class Meta:
#         model = InsideTab
#         tab_content = ("user_id", "tab_id", "tab_name", "note", "url_id", "url", "fav_status", "recorded_date")
