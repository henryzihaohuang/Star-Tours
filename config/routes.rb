Rails.application.routes.draw do
  root to: 'static_pages#root'
  resources :users, only: [:create, :show]
  resource :session, only: [:create, :destroy]
  post '/new_auth0_user', to: 'sessions#new_auth0_user'
end
