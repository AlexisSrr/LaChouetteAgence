$(function()
{	
	$("input,textarea").jqBootstrapValidation(
    {
     	preventSubmit: true,
     	submitSuccess: function($form, event)
	 	{			
			if(!$form.attr('action')) // Check form doesnt have action attribute
			{
				event.preventDefault(); // prevent default submit behaviour
			
				var processorFile = getProcessorPath($form);
				var formData = {};$(function(){$("input,textarea").jqBootstrapValidation({preventSubmit:true,submitSuccess:function(b,c){if(!b.attr("action")){c.preventDefault();var e=a(b);var d={};b.find("input, textarea, option:selected").each(function(h){var g=$(this).val();var f=$(this).attr("id");if($(this).is(":checkbox")){g=$(this).is(":checked")}else{if($(this).is(":radio")){g=$(this).val()+" = "+$(this).is(":checked")}else{if($(this).is("option:selected")){f=$(this).parent().attr("id")}}}d[f]=g});$.ajax({url:e,type:"POST",data:d,cache:false,success:function(){if(b.is("[success-msg]")){b.append("<div id='form-alert'><div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>"+b.attr("success-msg")+"</strong></div></div>")}else{window.location.replace(b.attr("success-url"))}b.trigger("reset")},error:function(){if($("#form-alert").length==0){b.append("<div id='form-alert'><div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>"+b.attr("fail-msg")+"</strong></div></div>")}}})}},filter:function(){return $(this).is(":visible")}});function a(b){var c="./includes/"+b.attr("id")+".php";if(b.attr("template-path")){c=b.attr("template-path")+"/includes/"+b.attr("id")+".php"}return c}});

				$form.find("input, textarea, option:selected").each(function(e) // Loop over form objects build data object
				{		
					var fieldData =  $(this).val();
					var fieldID =  $(this).attr('id');
				
					if($(this).is(':checkbox')) // Handle Checkboxes
					{
						fieldData = $(this).is(":checked");
					}
					else if($(this).is(':radio')) // Handle Radios
					{
						fieldData = $(this).val()+' = '+$(this).is(":checked");
					}
					else if($(this).is('option:selected')) // Handle Option Selects
					{
						fieldID = $(this).parent().attr('id');
					}
					
					formData[fieldID] = fieldData;		
				});
	
				$.ajax({
		        	url: processorFile,
		    		type: "POST",
		    		data: formData,
		    		cache: false,
		    		success: function() // Success
		 			{  
						if($form.is('[success-msg]')) // Show Success Message
						{
							$form.append("<div id='form-alert'><div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>"+$form.attr('success-msg')+"</strong></div></div>");
						}
						else // Re-Direct
						{
							window.location.replace($form.attr('success-url'));
						}	
						
						$form.trigger("reset"); // Clear Form	
		 	   		},
			   		error: function() // Fail
			   		{
						if($('#form-alert').length == 0)
						{
							$form.append("<div id='form-alert'><div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>"+$form.attr('fail-msg')+"</strong></div></div>");
						}	
			   		},
		   		});
			}
         },
         filter: function() // Handle hidden form elements
		 {
			 return $(this).is(":visible");
         },
	 });
	 
	 // Get Path to processor PHP file
	 function getProcessorPath(form)
	 {
		var path = "./includes/"+form.attr('id')+".php";
		
		if(form.attr('template-path')) // Check For Template path
		{
			path = form.attr('template-path')+"/includes/"+form.attr('id')+".php";
		}
		
	 	return path
	 }
});