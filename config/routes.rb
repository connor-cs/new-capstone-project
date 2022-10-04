Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # get '/hello', to: 'application#hello_world'

  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  
  get 'user/:id', to: "users#show"
  delete 'user/:id', to: "users#destroy"
  
  post '/signup', to: "users#create"
  post '/trails', to: "trails#show"

end
