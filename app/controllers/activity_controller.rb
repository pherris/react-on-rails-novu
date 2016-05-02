class ActivityController < ApplicationController
  include Strava

  before_filter :configure_strava

  def index
    puts "MAKING XHR"
    render json: @client.list_friends_activities
  end

  private

  def configure_strava
    @client ||= Strava::Api::V3::Client.new(:access_token => ENV["STRAVA_SECRET"]) #Ralston's personal token - don't abuse please!
  end
end
