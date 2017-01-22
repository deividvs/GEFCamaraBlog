Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users

  get "/pages/*id" => 'pages#show', as: :page, format: false
  root to: 'pages#show', id: 'sobre'

end
