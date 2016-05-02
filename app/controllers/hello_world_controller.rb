require "benchmark"

class HelloWorldController < ApplicationController
  #TODO, DRY up strava code
  include Strava

  before_filter :configure_strava

  def index
    @hello_world_props = { full_name: "Stranger" }
    time = Benchmark.measure do
      @strava_activities = @client.list_friends_activities
    end

    @statistics = { strava_api_time: time.real }
  end

  def configure_strava
    @client ||= Strava::Api::V3::Client.new(:access_token => ENV["STRAVA_SECRET"]) #Ralston's personal token - don't abuse please!
  end
end
