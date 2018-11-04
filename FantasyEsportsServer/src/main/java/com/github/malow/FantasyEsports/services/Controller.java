package com.github.malow.FantasyEsports.services;

import com.github.malow.FantasyEsports.services.GeneralExceptions.BadRequestException;
import com.github.malow.malowlib.GsonSingleton;
import com.github.malow.malowlib.network.https.HttpRequest;

public abstract class Controller
{
  protected <T extends HttpRequest> T getValidRequest(String body, Class<T> requestClass)
  {
    T request = GsonSingleton.fromJson(body, requestClass);
    if (request == null || !request.isValid())
    {
      throw new BadRequestException();
    }
    return request;
  }
}
