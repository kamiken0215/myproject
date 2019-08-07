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

function add_table_row(selected_tbody_id,last_url_id){
    alert(selected_tbody_id);
    alert(last_url_id);
    add_url_id = parseInt(last_url_id) + 1;
    var add_row = document.getElementById(selected_tbody_id);
    insert_date = '';
    insert_date += '<tr>';
    insert_date += `<td data-label="select" class=td_${add_url_id}>`;
    insert_date += '<label>';
    insert_date += `<input type="checkbox" class=main_checkbox${add_url_id} name="edit" checked>`;
    insert_date += `<span class=checkbox_parts${add_url_id}></span>`;
    insert_date += '</label>';
    insert_date += '</td>';
    insert_date += `<td data-label=note class=td_${add_url_id}>`;
    insert_date += `<div contenteditable="false" id=note_editable${add_url_id}>`;
    insert_date += '<p>てすと</p>';
    insert_date += '</div>';
    insert_date += '</td>';
    insert_date += `<td data-label="URL" class=td_${add_url_id}>`;
    insert_date += `<div contenteditable="false" id=url_editable${add_url_id}>`;
    insert_date += '<a href=#>あああ</a>';
    insert_date += '</div>';
    insert_date += `<td data-label="edit" class=td_${add_url_id}>`;
    insert_date += '<label>';
    insert_date += `<input type="checkbox" class=main_checkbox${add_url_id} onclick=change_status_editable('td_${add_url_id}','note_editable${add_url_id}','url_editable${add_url_id}',this.checked);>`;
    insert_date += `<span class=checkbox_parts${add_url_id}></span>`;
    insert_date += '</label>';
    insert_date += '</td>';
    insert_date += `<td data-label="fav" class=td_${add_url_id}>☆`;
    insert_date += '</td>';
    insert_date += `<td data-label="date" class=td_${add_url_id}>2019-07-02`;
    insert_date += '</td>';
    insert_date += '</tr>';
    add_row.insertAdjacentHTML('afterbegin',insert_date);
//    $('#'selected_tbody_id).prepend('<p>test t_body</p>');
    var for_replace = selected_tbody_id;
    replaced = for_replace.replace('tbody','');
    var create_next_id = document.getElementById("exe_con_submit");
    create_next_id.innerHTML = `<button type="button" class=orange_main_btn id=add_url_button${replaced} onclick=add_table_row('${selected_tbody_id}','${add_url_id}')>ADD</button>`
}