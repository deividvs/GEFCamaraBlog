class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception, prepend: true

  layout :layout_by_resource

  def layout_by_resource
        "application"
  end

end
