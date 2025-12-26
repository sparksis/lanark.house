C4 Model: My Smart Home Architecture (C4.1 to C4.3)This document provides a complete, hierarchical view of "My Smart Home" system using the C4 Model, progressing from the highest-level Context (C4.1) down through the Containers (C4.2) and into the Component-level details (C4.3) of key areas.C4.1 Home Context Diagram (System Level)This top-level diagram shows the primary systems that make up your home environment and how the Resident (You) interacts with them.C4Context
    title C4.1 Home System Context

    Person(resident, "Resident (You)", "Primary user of the home's features and automations (e.g., climate control, media, security).")

    System_Boundary(home, "My Smart Home System")

        System(exterior, "Exterior / Perimeter System", "Physical boundaries, security (Nest Light, Garage, Front Yard).")
        System(main_floor, "Main Floor System (Work-Life)", "Primary working, cooking, and social areas (Kitchen, Office, Living Room).")
        System(second_floor, "Second Floor System (Recreation/Rest)", "Primary sleeping, resting, and entertainment areas (Master Bedroom, Bonus Room).")
        System(basement, "Basement System", "Future expansion / The Unmentionables.")

    System_Boundary(home_assistant_platform, "Home Assistant Platform")
        System(ha, "Home Assistant Core", "The central software hub coordinating all automations and device states.")
    System_Boundary(home_assistant_platform)

    Rel(resident, main_floor, "Uses, Controls, Interacts via", "Voice, Touch, Presence")
    Rel(resident, second_floor, "Uses, Controls, Interacts via", "Voice, Touch, Presence")
    Rel(main_floor, second_floor, "Connects via", "Stairs Up")
    Rel(exterior, main_floor, "Access & Security Feeds to", "Hallway / HA Core")
    Rel(main_floor, basement, "Future Connection via", "Stairs Down")
    Rel(ha, exterior, "Controls and Monitors", "Nest Lights, Door/Camera Status")
    Rel(ha, main_floor, "Monitors and Automates", "Nest Hubs, Lights, Climate")
    Rel(ha, second_floor, "Monitors and Automates", "Nest Hubs, Lights, Climate")
C4.2 Main Floor Container DiagramThis diagram zooms into the Main Floor System, showing the core functional areas (Containers) that facilitate the "Work-Life" environment.C4Container
    title C4.2 Main Floor Containers (Area-Level)

    Container(kitchen, "Kitchen", "Nest Hub, Lighting", "Central Hub, Voice Control & Communication.")
    Container(dining, "Dining Room", "Physical Space", "Adjacent to Kitchen for quick access.")
    Container(living, "Living Room", "Photo Frame TV, Nest Light, Ghosts Near TV", "Ambiance and Media Consumption.")
    Container(office, "Office", "Nest Hub", "Focus and Climate Control.")
    Container(main_bath, "Bathroom Main", "Nest Hub", "Utility and Media.")
    Container(hallway, "Hallway", "Physical Flow", "Connects interior Main Floor to Exterior access points.")

    Container(stairs_up, "Stairs Up", "Physical Flow", "Vertical Connection to Balcony Hallway.")
    Container(stairs_down, "Stairs Down", "Physical Flow", "Connection to Basement System.")

    System(exterior_access, "Exterior Access", "Garage, Stoop, Front Yard", "Inbound/Outbound Flow and Security.")

    Rel(kitchen, dining, "Flows to", "Adjacent")
    Rel(kitchen, living, "Flows to", "Pass-Through")
    Rel(kitchen, hallway, "Flows to", "Opens to")

    Rel(hallway, main_bath, "Accesses", "Doorway")
    Rel(hallway, office, "Accesses", "Doorway")
    Rel(hallway, exterior_access, "Connects to", "Garage/Stoop")

    Rel(kitchen, stairs_up, "Vertical Access", "Stairwell")
    Rel(kitchen, stairs_down, "Future Vertical Access", "Stairwell")
C4.2 Second Floor Container DiagramThis diagram zooms into the Second Floor System, showing the areas (Containers) that support the "Recreation/Rest" function.C4Container
    title C4.2 Second Floor Containers (Area-Level)

    Container(balcony_hallway, "Balcony Hallway", "Physical Flow", "Central connection point for all Upper Floor rooms.")

    Container(master_bed, "Master Bedroom 1", "Nest Light", "Sleep, Climate, and Personal Scenes.")
    Container(closet, "Walk-in Closet", "Nest Light", "Quick Lighting (Activated by Door Sensor).")
    Container(master_bath, "Master Bathroom", "Nest Light", "Utility and Climate.")

    Container(bonus_room, "Bonus Room (Games)", "Nest Light", "Entertainment and Energy Saver.")
    Container(laundry, "Laundry", "Utility", "Utility Space.")
    Container(art_room, "Art Room/Bed 3", "Physical Space", "Adjacent to Bonus Room.")
    Container(guest_room, "Guest Room/Bed 2", "Physical Space", "Adjacent to Bonus Room.")

    System(stairs_up, "Stairs Up System", "From Main Floor", "Inbound Flow.")

    Rel(stairs_up, balcony_hallway, "Arrives at", "Top of Stairs")
    Rel(balcony_hallway, master_bed, "Accesses", "Doorway")
    Rel(master_bed, closet, "Accesses", "Doorway")
    Rel(master_bed, master_bath, "Accesses", "Doorway")
    Rel(balcony_hallway, bonus_room, "Accesses", "Doorway")
    Rel(balcony_hallway, laundry, "Accesses", "Doorway")

    Rel(bonus_room, art_room, "Flows to", "Accesses")
    Rel(bonus_room, guest_room, "Flows to", "Accesses")
C4.3 Component Diagrams (Level 3 Detail)These diagrams zoom into the internal architecture of the key rooms, showing the individual devices (Components) and their reliance on the central Home Assistant Core.C4.3 Kitchen ComponentsFunction: Central Hub, Voice Control, and Communication.C4Component
    title C4.3 Kitchen Components

    Container(kitchen, "Kitchen", "Central Hub for Voice/Automations")

    System(ha_core, "Home Assistant Core", "The central automation logic running on the main server.")

    Component(nest_hub, "Nest Hub Display", "Smart Display/Voice Interface", "Provides Visual and Voice I/O for quick interactions.")
    Component(lighting_ctrl, "Kitchen Lighting Controller", "Smart Switch/Relay", "Controls task and ambient lighting circuits.")
    Component(temp_sensor, "Climate Sensor", "Thermometer/Hygrometer", "Reports current temperature/humidity to HA for climate logic.")

    Rel(resident, nest_hub, "Interacts with", "Voice/Touch")
    Rel(nest_hub, ha_core, "Communicates Status/Receives Commands", "Google Cloud API / Wi-Fi")
    Rel(ha_core, lighting_ctrl, "Sends ON/OFF/Dimm Commands", "Wi-Fi / Zigbee Protocol")
    Rel(temp_sensor, ha_core, "Reports Temperature Data", "Wi-Fi / Zigbee Protocol")
C4.3 Living Room ComponentsFunction: Ambiance, Media Consumption.C4Component
    title C4.3 Living Room Components

    Container(living_room, "Living Room", "Container for Ambiance and Media Consumption")

    System(ha_core, "Home Assistant Core", "The central automation logic running on the main server.")

    Component(photo_tv, "Photo Frame TV", "Smart TV/Display Actuator", "Media Output and Digital Art Display (using HA Media Player integration).")
    Component(ambiance_lights, "Ambiance Lighting ('Ghosts')", "LED Strips/Bulbs", "Controls mood and entertainment lighting effects (e.g., color sync).")
    Component(nest_light, "Room Nest Light", "Smart Bulb/Switch", "Controls main room lighting and general scenes.")
    Component(remote_ctrl, "Universal Remote (Software)", "HA Companion App Interface", "Sends IR/IP commands to media devices via Home Assistant.")

    Rel(remote_ctrl, ha_core, "Interface for Media Control", "App Interface")
    Rel(ha_core, photo_tv, "Sends Display/Power Commands", "IP/IR over Wi-Fi")
    Rel(ha_core, ambiance_lights, "Sends Color/Effect Commands", "Proprietary/Wi-Fi Protocol")
    Rel(ha_core, nest_light, "Sends ON/OFF/Dimm Commands", "Wi-Fi / Zigbee Protocol")
    Rel(resident, remote_ctrl, "Controls Media with", "Mobile App/Tablet")
C4.3 Office ComponentsFunction: Focus, Climate Control.C4Component
    title C4.3 Office Components

    Container(office, "Office", "Container for Focus and Climate Control")

    System(ha_core, "Home Assistant Core", "The central automation logic running on the main server.")

    Component(nest_hub_mini, "Office Nest Hub Mini", "Smart Speaker/Voice I/O", "Handles voice commands and provides audio feedback.")
    Component(desk_light, "Desk Lamp Switch", "Smart Plug/Switch", "Controls power to desk lighting or computer monitor.")
    Component(thermostat, "Office Thermostat/Sensor", "Smart Thermostat/Sensor", "Manages and reports local climate setpoints and data.")

    Rel(resident, nest_hub_mini, "Interacts with", "Voice")
    Rel(nest_hub_mini, ha_core, "Communicates Voice Commands", "Google Cloud API / Wi-Fi")
    Rel(ha_core, desk_light, "Sends ON/OFF Command", "Wi-Fi Protocol")
    Rel(thermostat, ha_core, "Reports/Receives Climate Data", "Wi-Fi / Z-Wave Protocol")
C4.3 Master Bedroom ComponentsFunction: Sleep, Climate, Personal Scenes.C4Component
    title C4.3 Master Bedroom Components

    Container(master_bed, "Master Bedroom 1", "Container for Sleep, Climate, Personal Scenes")

    System(ha_core, "Home Assistant Core", "The central automation logic running on the main server.")

    Component(nest_light, "Bedroom Nest Light", "Smart Bulb/Switch", "Controls main and nightstand lighting for scenes.")
    Component(scene_btn, "Personal Scene Button", "Smart Button/Remote", "Triggers complex sleep/wake/reading scenes in HA.")
    Component(climate_actuator, "Climate Actuator", "HVAC Register/Thermostat", "Adjusts temperature setpoint or air flow based on scene.")
    Component(walk_in_closet, "Walk-in Closet (Sub-Container)", "Area", "Triggered by Door Sensor (L4 Component).")

    Rel(resident, scene_btn, "Activates Scenes", "Physical Press/App")
    Rel(scene_btn, ha_core, "Sends Scene Trigger Event", "Zigbee/Bluetooth")
    Rel(ha_core, nest_light, "Sends Lighting Commands", "Wi-Fi / Zigbee Protocol")
    Rel(ha_core, climate_actuator, "Sends Temperature Setpoint", "Wi-Fi / Z-Wave Protocol")
    Rel(ha_core, walk_in_closet, "Controls Lighting In", "Automation Logic")
C4.3 Bonus Room ComponentsFunction: Energy Saver, Entertainment.C4Component
    title C4.3 Bonus Room Components

    Container(bonus_room, "Bonus Room (Games)", "Container for Entertainment and Energy Saving")

    System(ha_core, "Home Assistant Core", "The central automation logic running on the main server.")

    Component(nest_light_group, "Bonus Room Nest Light Group", "Grouped Smart Bulbs/Switches", "Controls room lighting for focused game scenes.")
    Component(motion_sensor, "Occupancy Sensor", "PIR/Radar Sensor", "Detects presence to trigger 'Energy Save' automations.")
    Component(console_switch, "Game Console Smart Switch", "Smart Plug", "Cuts power to non-essential entertainment devices when unoccupied.")
    Component(entertainment_hub, "Media Hub", "IR Blaster/IP Controller", "Controls TV, console power, and audio input selection.")

    Rel(motion_sensor, ha_core, "Sends Occupancy State (True/False)", "Zigbee/Z-Wave")
    Rel(ha_core, nest_light_group, "Sends Scene Lighting Command", "Wi-Fi / Zigbee")
    Rel(ha_core, console_switch, "Sends Power ON/OFF Command (Energy Save)", "Wi-Fi Protocol")
    Rel(ha_core, entertainment_hub, "Sends Media Control Commands", "IP/IR over Wi-Fi")
    Rel(resident, ha_core, "Triggers Games Scene via App/Voice", "Interface")
