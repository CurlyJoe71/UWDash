import React from 'react';
import { render } from 'react-dom';
import {
    SideNav, SideNavItems, SideNavLink, SideNavMenu, SideNavMenuItem
} from 'carbon-components-react/lib/components/UIShell';

export default function SideBar() {
    return (
        <SideNav
            isFixedNav
            expanded={true}
            isChildOfHeader={true}
            aria-label="Side navigation"
        >
            <SideNavItems>
                <SideNavMenu title="L0 menu">
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem aria-current="page" href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu title="L0 menu">
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem aria-current="page" href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu title="L0 menu">
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem aria-current="page" href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                </SideNavMenu>
                <SideNavLink href="javascript:void(0)">L0 link</SideNavLink>
                <SideNavLink href="javascript:void(0)">L0 link</SideNavLink>
            </SideNavItems>
        </SideNav>
    )
}