Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  
  patch '/user/:id', to: "users#update"
  get 'user/:id', to: "users#show"
  delete 'user/:id', to: "users#destroy"
  post '/signup', to: "users#create"

  post '/favorites', to: "favorites#create"
  get '/favorites', to: "favorites#show"
  
  post '/trails', to: "trails#get_trails"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
