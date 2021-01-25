﻿using BLL.App.DTO;
using Contracts.DAL.App.Repositories;
using ee.itcollege.kaande.pitsariina.Contracts.BLL.Base.Services;


namespace Contracts.BLL.App.Services
{
    public interface IComponentPizzaTemplateService : IBaseEntityService<ComponentPizzaTemplate>, IComponentPizzaTemplateRepositoryCustom<ComponentPizzaTemplate>
    {
        
    }
}