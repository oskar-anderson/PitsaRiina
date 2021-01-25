﻿using System;
using ee.itcollege.kaande.pitsariina.Contracts.Domain;
using Microsoft.AspNetCore.Identity;

namespace ee.itcollege.kaande.pitsariina.Domain.Base
{
    public abstract class DomainEntityIdMetadataUser<TUser> : DomainEntityIdMetadataUser<Guid, TUser>, IDomainEntityUser<TUser>
        where TUser : IdentityUser<Guid>
    {
    }

    public abstract class DomainEntityIdMetadataUser<TKey, TUser> : DomainEntityIdMetadata<TKey>,
        IDomainEntityUser<TKey, TUser>
        where TKey : IEquatable<TKey>
        where TUser: IdentityUser<TKey>
    {
        public TKey AppUserId { get; set; } = default!;

        // public TUser? AppUser { get; set; }
    }
}