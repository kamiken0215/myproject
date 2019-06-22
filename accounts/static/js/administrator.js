(function($){
    $('input[id="tab1"]').get(0).prop('checked',true);
    $("#tab1:checked ~ #tab1_content").css({"display":"block" ,"background-color":"aliceblue"});
}(jQuery));

function change_tab(tab_id, tab_dict){
    $(function(){
        tab_value = document.getElementById(tab_id).value;
        removing_part_tab = tab_value;
        for_change_tab_id = removing_part_tab.replace(/tab/g,'');
        //クリックしたタブを表示
        $(`#${tab_value}:checked ~ #${tab_value}_content`).css(
            {"display":"block" ,"background-color":"aliceblue"});
        //クリックされなかったタブを全て非表示
        delete tab_dict[for_change_tab_id];
        for(key in tab_dict){
            $(`#tab${key}_content`).css
            ("display", "none");
        }
    });
}

function change_status_editable(td_class_name,p_note_editable,p_url_editable,ischecked){
    checked_td = document.getElementsByClassName(td_class_name);
    note_editable = document.getElementById(p_note_editable);
    url_editable = document.getElementById(p_url_editable);
    if(ischecked){
        //checked_tr.parentNode.style.backgroundColor = '#ffd6ea';
        for(i = 0; i < checked_td.length; i++){
            checked_td[i].style.cssText = "background-color:#ffd6ea !important;";
        }
        note_editable.setAttribute('contenteditable', true);
        url_editable.setAttribute('contenteditable', true);

    }else{
        for_change_color_td = td_class_name.replace(/td_/g,'');
        if(parseInt(for_change_color_td) % 2 == 0){
            for(i = 0; i < checked_td.length; i++){
                checked_td[i].style.cssText = "background-color:#E9F0FA;";
            }
        }else{
            for(i = 0; i < checked_td.length; i++){
                checked_td[i].style.cssText = "background-color:#ffffff;";
            }
        }
        note_editable.setAttribute('contenteditable', false);
        url_editable.setAttribute('contenteditable', false);
    }
}