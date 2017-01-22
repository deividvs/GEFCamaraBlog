module ApplicationHelper

  def app_name
    "7 DIAS PARA O SUCESSO"
  end

  def base_title
    base_title = "GAMARA"
  end

  def full_title(page_title)
    if page_title.empty?
      base_title.html_safe
    else
      "#{page_title} - #{base_title}".html_safe
    end
  end

  def is_active(controller, action)
    params[:action] == action && params[:controller] == controller ? "active" : nil
  end

  def is_active_hv(controller, id)
    params[:id] == id && params[:action] == 'show' && params[:controller] == controller ? "active" : nil
  end

end
