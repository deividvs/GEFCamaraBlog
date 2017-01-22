Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users

  resource :leads, only: [:new, :create]
  resources :posts, only: [:index, :show]

  get "*id" => 'pages#show', as: :page, format: false
  #root to: 'pages#show', id: 'index'
  root to: 'posts#index'

end
