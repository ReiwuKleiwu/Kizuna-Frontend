<script setup lang="ts"></script>

<template>
    <div
        class="bg-card grid grid-cols-[1fr_min(100ch,_100%)_1fr] flex-1 p-4 rounded-lg border border-border"
    >
        <div class="col-span-1 col-start-2">
            <Tabs default-value="overview">
                <div class="flex gap-4">
                    <TabsList>
                        <div class="flex flex-col w-40">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="Roles">Roles</TabsTrigger>
                            <TabsTrigger value="members">Members</TabsTrigger>
                        </div>
                    </TabsList>
                    <div class="flex-1">
                        <TabsContent value="overview">
                            <div class="grid max-w-sm items-center gap-1.5">
                                <Label for="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                        </TabsContent>
                    </div>
                </div>
            </Tabs>
        </div>
    </div>
</template>

<style scoped></style>
