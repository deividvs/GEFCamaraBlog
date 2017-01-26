class PagesController < ApplicationController

  include HighVoltage::StaticPage

  layout :page_layout

  private
  def page_layout
    case params[:id]
      when 'sobre'
        'application_static'
      when 'qual-a-melhor-plataforma-para-o-meu-negocio'
        'application_static'
      else
        'application'
    end
  end

end
