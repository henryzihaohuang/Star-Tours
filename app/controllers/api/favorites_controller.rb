class Api::FavoritesController < ApplicationController

    def index
        favorites = current_user.favorites
    
        render json: favorites
    end

    def create
        character = current_user.favorites.new(character_id: params[:character][:character_id])

        if character.save
            render json: character
        else
            render json: {error: "Unable to create favorite character."},
            status: 401
        end
    end

end