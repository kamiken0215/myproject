from django.db import models
from django.utils import timezone


class InsideTab(models.Model):

    """お気に入りの定数"""
    ORDINARY = 0 # 特になにもない
    FAVORITE = 1 # お気に入り

    """ユーザーID"""
    user_id = models.IntegerField()
    """タブID"""
    tab_id = models.IntegerField()
    """タブの名前"""
    tab_name = models.CharField(max_length=10)
    """URLの覚書"""
    note = models.CharField(max_length=128)
    """URL ID"""
    url_id = models.IntegerField()
    """URL"""
    url = models.CharField(max_length=128)
    """お気に入り"""
    fav_status = models.IntegerField()
    """URL登録日"""
    recorded_date = models.DateField(default=timezone.now)