-- CreateTable
CREATE TABLE "SnorlaxMoves" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "identifier" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "damage" INTEGER NOT NULL,
    "pp" INTEGER NOT NULL,
    "imageSrc" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "SnorlaxMoves_identifier_key" ON "SnorlaxMoves"("identifier");
