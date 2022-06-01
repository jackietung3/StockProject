require 'uri'
require 'net/http'
require 'openssl'
require 'dotenv'
Dotenv.load('./.env')

class StocksController < ApplicationController

    def index

        url = URI("https://yh-finance.p.rapidapi.com/market/get-trending-tickers?region=US")

        http = Net::HTTP.new(url.host, url.port)
        http.use_ssl = true
        http.verify_mode = OpenSSL::SSL::VERIFY_NONE

        request = Net::HTTP::Get.new(url)
        request["X-RapidAPI-Host"] = 'yh-finance.p.rapidapi.com'
        request["X-RapidAPI-Key"] = ENV['STOCK_API_KEY']
        response = http.request(request)
        render json: response.read_body
    end

    def show 
        url = URI("https://yh-finance.p.rapidapi.com/auto-complete?q=#{params[:ticker_name]}&region=US")

        http = Net::HTTP.new(url.host, url.port)
        http.use_ssl = true
        http.verify_mode = OpenSSL::SSL::VERIFY_NONE

        request = Net::HTTP::Get.new(url)
        request["X-RapidAPI-Host"] = 'yh-finance.p.rapidapi.com'
        request["X-RapidAPI-Key"] = ENV['STOCK_API_KEY']


        response = http.request(request)
        render json: response.read_body
    end


    def get_ticker
        url = URI("https://yh-finance.p.rapidapi.com/stock/v2/get-profile?symbol=#{params[:symbol_name]}&region=US")

        http = Net::HTTP.new(url.host, url.port)
        http.use_ssl = true
        http.verify_mode = OpenSSL::SSL::VERIFY_NONE

        request = Net::HTTP::Get.new(url)
        request["X-RapidAPI-Host"] = 'yh-finance.p.rapidapi.com'
        request["X-RapidAPI-Key"] = ENV['STOCK_API_KEY']

        response = http.request(request)
        render json: response.read_body
    end

    def chart
        url = URI(url = URI("https://yh-finance.p.rapidapi.com/stock/v3/get-chart?interval=15m&symbol=aapl&range=2d&region=US&includePrePost=false&useYfid=true&includeAdjustedClose=true&events=capitalGain%2Cdiv%2Csplit"))

        http = Net::HTTP.new(url.host, url.port)
        http.use_ssl = true
        http.verify_mode = OpenSSL::SSL::VERIFY_NONE

        request = Net::HTTP::Get.new(url)
        request["X-RapidAPI-Host"] = 'yh-finance.p.rapidapi.com'
        request["X-RapidAPI-Key"] = ENV['STOCK_API_KEY']

        response = http.request(request)
        render json: response.read_body
    end

end
