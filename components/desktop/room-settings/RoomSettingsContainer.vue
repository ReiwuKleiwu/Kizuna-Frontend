<script setup lang="ts"></script>

<template>
    <div
        class="grid flex-1 grid-cols-[1fr_min(100ch,_100%)_1fr] rounded-lg border border-border bg-card p-4"
    >
        <div class="col-span-1 col-start-2">
            <Tabs default-value="overview">
                <div class="flex gap-4">
                    <TabsList>
                        <div class="flex w-40 flex-col">
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
