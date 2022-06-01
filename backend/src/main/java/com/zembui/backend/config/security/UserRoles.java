package com.zembui.backend.config.security;

import com.google.common.collect.Sets;

import java.util.Set;

import static com.zembui.backend.config.security.UserPermissions.*;

public enum UserRoles {
    PLAYER(Sets.newHashSet(PLAYER_READ, ABOUT_US_READ)),
    ADMIN(Sets.newHashSet(ABOUT_US_READ, ABOUT_US_WRITE, PLAYER_READ, PLAYER_WRITE));

    private final Set<UserPermissions> permissions;

    UserRoles(Set<UserPermissions> permissions) {
        this.permissions = permissions;
    }

    public Set<UserPermissions> getPermissions() {
        return permissions;
    }
}
