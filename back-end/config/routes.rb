Rails.application.routes.draw do
  resources :hours, :pois, :locations, defaults: {format: :json}
  # namespace :api, defaults: {format: :json} do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
