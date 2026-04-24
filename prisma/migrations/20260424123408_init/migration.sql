-- CreateTable
CREATE TABLE "shortcut" (
    "baseUrl" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "click" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "shortcut_code_key" ON "shortcut"("code");
