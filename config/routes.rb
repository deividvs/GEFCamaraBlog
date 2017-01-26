Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users

  resource :leads, only: [:new, :create]
  resources :posts, only: [:index, :show]
  get "qual-a-melhor-plataforma-para-o-meu-negocio", to: 'quiz#index'
  get 'quiz', to: 'quiz#index2'

  get "*id" => 'pages#show', as: :page, format: false
  #root to: 'pages#show', id: 'index'
  root to: 'posts#index'

end
