package com.github.malow.FantasyEsports.services.league;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface LeagueRepository extends MongoRepository<League, String>
{
  public League findByName(String name);
}