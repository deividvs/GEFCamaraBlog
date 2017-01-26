(function($){
	$(function(){
		var theForm = document.getElementById( 'theForm' );
	            theForm.setAttribute( "autocomplete", "off" );

	    var plataformas = [
	    	{
	    		titulo: 'Plataformas SaaS',
	    		content: '<p>São serviços de e-commerce desenvolvidos por empresas especializadas que oferecem o sistema por meio de mensalidades ou taxas sobre o valor da venda, no qual qualquer pessoa pode se cadastrar e rapidamente estar colocando sua loja no ar para começar a vender.<br/>'+
						'A vantagem sobre esse tipo de plataforma é a disponibilidade de integração com os principais meios de pagamento do mercado, calculo de frete e Marketplaces além do suporte, manutenção e atualização de todo o sistema garantido pela empresa.</p>'
	    	},
	    	{
	    		titulo: 'Plataformas Open Source',
	    		content: '<p>São plataformas desenvolvidas pela comunidade de programadores que disponibilizam o código para qualquer pessoa criar e customizar sua própria loja virtual.<br/>'+
						'Para esse tipo de plataforma é necessário o auxilio de algum programador para configurar e hospedar a loja.<br/>'+
						'A vantagem desse tipo de serviço é uma maior liberdade para customizações mais profundas.</p>'
	    	},
	    	{
	    		titulo: 'Plataforma Exclusivas',
	    		content: '<p>São plataformas desenvolvidas exclusivamente para atender uma necessidade de uma empresa.<br/>' +
						'Esse tipo de plataforma vem sumindo devido seu alto custo de desenvolvimento e manutenção.<br/>' +
						'A vantagem desse tipo de plataforma é o completo controle sobre o sistema.</p>'
	    	}
	    ];

		new stepsForm( theForm, {
			onSubmit : function( form ) {
				// hide form
				classie.addClass( theForm.querySelector( '.simform-inner' ), 'hide' );

				var nome = $(form).find('#q_nome').val();
				var email = $(form).find('#q_email').val();
				var index = nome.lastIndexOf(' ');

				if(index !== -1){
					var first_name = nome.substr(0, index);
					var last_name = nome.substr(index + 1);
				}else{
					var first_name = nome;
					var last_name = '';
				}

				$.ajax({
					url:'/leads',
					type: 'POST',
					dataType: 'text',
					data: {
						commit: 'Inscrever',
						lead: {
							first_name: first_name,
							last_name: last_name,
							email: email
						}
					}
				});

				var result = $(form).find('.ac-custom').find(':checked')
				.toArray()
				.map(function(el){
					return el.value.split('-').map(function(v){
						return parseInt(v);
					});
				}).reduce(function(a, b){
					return [ a[0] + b[0], a[1] + b[1], a[2] + b[2] ];
				});

				var greater = Math.max.apply(null, result);

				var plataforma = plataformas[result.indexOf(greater)];

				// let's just simulate something...
				var messageEl = theForm.querySelector( '.quiz-resultado' );
				messageEl.innerHTML = '<h4>Obrigado por participar, a plataforma mais adequada para seu negócio é:</h4>'+
					'<h3>' + plataforma.titulo + '</h3>'+
					'<div class="resultado-content">' + plataforma.content + '</div>';

				classie.addClass( messageEl, 'show' );
			}
		});
	});
}(window.jQuery));