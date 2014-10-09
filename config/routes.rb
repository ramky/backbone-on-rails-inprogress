Rails.application.routes.draw do
  resources :tasks, only: [:show, :create, :update, :index]
end
