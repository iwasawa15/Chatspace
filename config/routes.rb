Rails.application.routes.draw do

  get 'groups/new'

  get 'groups/create'

  get 'groups/edit'

  get 'groups/update'

  devise_for :users
  resources :users, only: [:edit, :update]

  resources :messages, only: [:index]

  root 'messages#index'
end
