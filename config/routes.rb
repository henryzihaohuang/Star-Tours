Rails.application.routes.draw do
  root to: 'static_pages#root'
  resources :users, only: [:create, :show, :update]
  resource :session, only: [:create, :destroy]
end
