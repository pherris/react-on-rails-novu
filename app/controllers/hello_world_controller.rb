require "benchmark"
require 'securerandom'

class HelloWorldController < ApplicationController
  #TODO, DRY up strava code
  include Strava

  before_filter :configure_strava

  TYPES = {
    PRENATAL: 'prenatal',
    LOCKED: 'locked',
    FLU_SHOT: 'flu-shot',
    DENTAL: 'dental',
    WELLNESS: 'annual-wellness'
  }

  WORDS = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'

  def index
    @hello_world_props = { fullName: "Stranger", rewardsEarned: 24 }
    time = Benchmark.measure do
      @strava_activities = Rails.cache.fetch("HelloWorldController/strava_activities", expires_in: 10.minutes) do
        @client.list_friends_activities
      end
    end

    @statistics = { strava_api_time: time.real }
    @behaviors = behaviors
  end

  def detail
    typeArray = TYPES.to_a
    reward = rand(10..100).round(-1)
    @behavior = {
      id: SecureRandom.uuid,
      type: 'behavior',
      category: category,
      header: header,
      description: body,
      about: body(50),
      whatToExpect: body(40),
      reward: "$#{reward} Gift Card",
      duration: 'Jan 1, 2016 - Dec. 31, 2016',
      disabled: false
    }
    @hello_world_props = { fullName: "Stranger", rewardsEarned: 24 }
  end

  private

  def configure_strava
    @client ||= Strava::Api::V3::Client.new(:access_token => ENV["STRAVA_SECRET"]) #Ralston's personal token - don't abuse please!
  end

  def behaviors
    [bundle, behavior, behavior, behavior, behavior]
  end

  def bundle
    {
      id: SecureRandom.uuid,
      type: 'bundle',
      category: TYPES[:PRENATAL],
      header: header,
      description: body(20),
      rewards: ["$#{rand(10..100).round(-1)} Gift Card", 'Diapers', 'etc.'],
      duration: 'Jan 1, 2016 - Dec. 31, 2016',
      behaviors: [behavior, behavior, behavior, behavior],
      disabled: false
    }
  end

  def behavior
    {
      id: SecureRandom.uuid,
      type: 'behavior',
      category: category,
      header: header,
      description: body,
      reward: "$#{rand(10..100).round(-1)} Gift Card",
      duration: 'Jan 1, 2016 - Dec. 31, 2016',
      disabled: rand(0..1) == 1
    }
  end

  def header(size = 4)
    WORDS.split.sample(size).join(' ').titleize
  end

  def body(size = 12)
    WORDS.split.sample(size).join(' ').capitalize
  end

  def category
    typeArray = TYPES.to_a
    typeArray.sample(1, random: 0..typeArray.length)[0][1] #don't look behind the curtains
  end
end
