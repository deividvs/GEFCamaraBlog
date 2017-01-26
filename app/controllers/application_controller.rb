class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception, prepend: true

  layout :layout_by_resource

  def layout_by_resource
      if controller_name == 'quiz' && action_name == 'index2'
          "application_simple"
      else
          "application"
      end
  end

end
