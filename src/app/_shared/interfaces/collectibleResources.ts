export interface CollectibleResources {
    id: number;
    skillId: number;
    resourceId: number;
    resourceIndex: number;
    collectItemId: number;
    resourceNextIndex: number;
    skillLevelRequired: number;
    simultaneousPlayer: number;
    visualFeedbackId: number;
    duration: number;
    mruOrder: number;
    xpFactor: number;
    collectLootListId: number;
    collectConsumableItemId: number;
    collectGfxId: number;
    displayInCraftDialog: boolean;
}
