# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160404230954) do

  create_table "people", primary_key: "person_id", force: :cascade do |t|
    t.integer  "home_id"
    t.integer  "p01"
    t.integer  "p02"
    t.integer  "p03"
    t.integer  "p04"
    t.integer  "p05"
    t.integer  "p06"
    t.integer  "p07"
    t.integer  "p12"
    t.integer  "edadgru"
    t.integer  "edadqui"
    t.integer  "p08"
    t.integer  "p09"
    t.integer  "p10"
    t.integer  "condact"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
