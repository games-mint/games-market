ALTER TABLE "posts" ALTER COLUMN "bio" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "image_url" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "price" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "image_url" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "title" varchar(256) NOT NULL;