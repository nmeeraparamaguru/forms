Ext.define('MyApp4.view.login.loginview', {
	extend: 'Ext.Container',
	xtype: 'loginview',
	cls: 'loginview',
	layout: 'card',
	items:[{
		xtype:'panel',
		//viewModel: {
		//	type: 'test'
		//},
		fullscreen:true,
	
	//layout:'hbox',
	defaultType:'textfield',
	defaults:{
		flex:1
	},
	items:[{
		html:'Login Form',
		style:'background-color:white'
	},
	{
	    xtype: 'textfield',
		fieldLabel: 'User Name',
        labelAlign:'left',
	      id: 'userid'
	},


{
    xtype: 'passwordfield',
	fieldLabel: 'password',
    labelAlign:'left',
	id: 'passid'
},

{
	xtype:'button',
	text:'Submit',
	handler:function(){
		
		var username=Ext.getCmp('userid').getValue();
		var password=Ext.getCmp('passid').getValue();
		Ext.Ajax.request({
			url:' http://localhost:3000/posts',
			method: 'Post',
			jsonData:{
				name:username,
				pass:password
			},
			success: function (response){
				console.log(response);
			},
			
	})
		
		}
	}
	]
}]


});