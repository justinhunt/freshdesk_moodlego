(function() {
  return {
    initialize: function() {
      var viewmoodle_template = "<a class='btn btn-primary' href='https://www.ispc-x.jp/user/view.php?id=@@MOODLE_ID@@'>Moodleで@@USER_NAME@@を見る</a>";
      
      var viewreport_template = "<a class='btn btn-primary' href='https://www.ispc-x.jp/blocks/configurable_reports/viewreport.php?id=3&courseid=1&filter_users=@@MOODLE_ID@@'>@@USER_NAME@@の進捗を見る</a>";
      
      
      var contact = false;
      if(page_type == "ticket") {
        contact = domHelper.ticket.getContactInfo();
      }
      else if(page_type == "contact"){
      	 contact = domHelper.contact.getContactInfo();  
      }
       var user_name = contact.user.name;
       if(contact.user['custom_field'] && contact.user.custom_field['cf_moodle_id']){
		   var moodle_id =contact.user.custom_field.cf_moodle_id;
		   
		   //view user button 
		   var viewmoodle = viewmoodle_template.replace('@@MOODLE_ID@@',moodle_id);
			viewmoodle = viewmoodle.replace('@@USER_NAME@@',user_name);
			
			//view user report button		   
			var viewreport = viewreport_template.replace('@@MOODLE_ID@@',moodle_id);
			viewreport = viewreport.replace('@@USER_NAME@@',user_name);
			
			//add to freshdesk
			jQuery('#apptext').html(viewmoodle + '<br><br>' + viewreport);
        
        }else{
        	jQuery('#apptext').html("Moodleのユーザー情報はない。");
        }
    }
  }
})();

/*
{%comment%}

## Help: Using iparam (​installation parameters) in code

iparam: The ​settings that you want your users to configure when installing the
app.

iparam definition is made in config/iparam_en.yml file. To use the defined
iparam in code, use Liquid notation like:

- {{iparam.username}}
- {{iparam.country}}

{%endcomment%}
*/
