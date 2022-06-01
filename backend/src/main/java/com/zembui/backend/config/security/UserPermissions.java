package com.zembui.backend.config.security;

public enum UserPermissions {
    PLAYER_READ("player:read"),
    PLAYER_WRITE("player:write"),
    ABOUT_US_READ("about_us:read"),
    ABOUT_US_WRITE("about_us:write");

    private final String permission;

    UserPermissions(String permission) {
        this.permission = permission;
    }

    public String getPermission() {
        return permission;
    }
}
