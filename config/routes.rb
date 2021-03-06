Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :favorites, only: [:index, :create, :show]
  end

  post '/new_auth0_user', to: 'sessions#new_auth0_user'
end
