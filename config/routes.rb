Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:index, :create, :show, :update, :destroy] 
    resources :videos, only: [:index, :show, :create, :update, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end
end
